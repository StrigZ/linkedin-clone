import "./Feed.css";
import FlipMove from "react-flip-move";
import {
  Create as CreateIcon,
  Image as ImageIcon,
  Subscriptions as SubscriptionsIcon,
  EventNote as EventNoteIcon,
  CalendarViewDay as CalendarViewDayIcon,
} from "@mui/icons-material";
import InputOption from "./InputOption";
import Post from "./Post";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  doc,
  collection,
  getDocs,
  setDoc,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    //создает запрос в виде коллекции постс отсортированного в порядке убывания по дате
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    // вызывает фунцию с этим запросом,
    // которая возвращает снапшот этого запроса
    onSnapshot(q, (querySnapshot) => {
      // который сохраняется в виде массива и передается функции
      // setPosts, вызывая ререндер страницы с новой инфой
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__input-container">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__input-options">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
      <Post
        name="Sonny Sangha"
        description="This is a description"
        message="Wow this worked!"
        photoUrl=""
      />
    </div>
  );
};
export default Feed;
