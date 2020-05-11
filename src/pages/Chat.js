import React, { Component } from "react"
import Header from "../components/Header"

import { db, auth, messaging } from '../services/firebase'

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      chats: [],
      content: '',
      readError: null,
      writeError: null,
      loadingChats: false,
      token: '',
      suscribe: {},
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getTokenUser = this.getTokenUser.bind(this)
    this.showMessage = this.showMessage.bind(this)
    this.enterKey = this.enterKey.bind(this)
    this.myRef = React.createRef()
  }

  // antes del render inicial
  // async componentWillMount() {
  //   let dataChats = []
  //   await db.collection('chat').get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         //console.log(`${doc.id} => ${doc.data()}`);
  //         let data = { idDoc: doc.id, ...doc.data() }
  //         dataChats.push(data)
  //       })
  //     })

  //     dataChats.sort(function (a, b) { return a.timestamp.seconds - b.timestamp.seconds })
  //     this.setState({ chats: dataChats });
  //     const chatArea = this.myRef.current;
  //     chatArea.scrollBy(0, chatArea.scrollHeight);
  //     this.setState({ 
  //       loadingChats: false,
  //       user: auth().currentUser
  //     });

  //   // podemos escuchar un documento de la cloud forestore db con el metodo onSnapShot()
  //   // await db.collection('chat').onSnapshot(snapshot => {
  //   //   snapshot.docs.forEach(doc => {
  //   //     let data = { idDoc: doc.id, ...doc.data() }
  //   //     dataChats.push(data)
  //   //   })
  //   //   dataChats.sort(function (a, b) { return a.timestamp - b.timestamp })
  //   //   this.setState({ chats: dataChats });
  //   //   const chatArea = this.myRef.current;
  //   //   chatArea.scrollBy(0, chatArea.scrollHeight);
  //   //   this.setState({
  //   //     loadingChats: false,
  //   //     user: auth().currentUser
  //   //   });
  //   // })
  // }

  async componentDidMount() {
    await this.getTokenUser()
    this.setState({
      readError: null,
      loadingChats: true
    });

    try {
      // podemos escuchar un documento de la cloud forestore db con el metodo onSnapShot()
      db.collection('chat').onSnapshot(snapshot => {
        let chats = []
        snapshot.docs.forEach(doc => {
          let data = { idDoc: doc.id, ...doc.data() }
          chats.push(data)
        })
        chats.sort(function (a, b) { return a.timestamp - b.timestamp })
        this.setState({ chats });
        const chatArea = this.myRef.current;
        chatArea.scrollBy(0, chatArea.scrollHeight);
        this.setState({
          loadingChats: false,
          user: auth().currentUser
        });
      })
      document.addEventListener("keydown", this.enterKey, false)
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    }
  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.enterKey, false)
  }

  enterKey = evt => {
    // enter key
    if (evt.keyCode === 13) this.handleSubmit(evt)
  }

  showMessage = () => {
    // messaging.onMessage(payload => {
    //   //payload && this.setState({ suscribe: payload.data })
    //   console.log('show notification')
    // })
  }

  getTokenUser = async () => {
    messaging.requestPermission().then(() => {
      return messaging.getToken()
    }).then(token => {
      this.setState({ token })
    }).catch(err => { console.log('error, token', err) })
  }

  handleChange = (event) =>
    this.setState({
      content: event.target.value
    })

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const chatArea = this.myRef.current;

    if (this.state.content === '') {
      alert('escriba un mensaje')
      return
    }

    const comment = {
      name: this.state.user.email,
      content: this.state.content,
      timestamp: Date.now(),
      token: this.state.token,
      topic: '',
    }
    try {
      db.collection('chat').add(comment)
        .then(docRef => console.log("Document written with ID: ", docRef.id))
        .catch(err => console.log("Error adding document: ", err))
      this.setState({ content: '' });
      chatArea.scrollBy(0, chatArea.scrollHeight);
      //this.showMessage()
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  render() {
    return (
      <div>
        <Header />
        <div className="chat-area" ref={this.myRef}>
          {/* loading indicator */}
          {this.state.loadingChats ? <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div> : ""}
          {/* chat area */}
          {this.state.chats.map((chat, key) => {
            return (
              <p key={chat.timestamp}
                className={`chat-bubble ${this.state.user.uid !== undefined && "current-user"}`}
              >
                {chat.content}
                <br />
                <span className="chat-time float-right">
                  {this.formatTime(chat.timestamp)}
                </span>
                <span className="blockquote-footer">
                  <cite title="Source Title">{chat.name}</cite>
                </span>
              </p>
            )
          })}
        </div>
        <form
          onSubmit={this.handleSubmit}
          className="mx-3">
          <textarea
            className="form-control"
            name="content"
            onChange={this.handleChange}
            value={this.state.content}>
          </textarea>
          {this.state.error
            ? <p className="text-danger">{this.state.error}</p>
            : null
          }
          <button
            type="submit"
            className="btn btn-submit px-5 mt-4"
          >
            Send
          </button>
          <span className="mx-3">
            Login in as:
            <strong className="text-info">{this.state.user.email}</strong>
          </span>
        </form>
      </div>
    );
  }
}

export default Chat