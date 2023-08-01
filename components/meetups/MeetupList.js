import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  if (!props.meetups) {
    return <p>Loading...</p>; // Add a loading state when meetups is undefined
  }

  if (props.meetups.length === 0) {
    return <p>No meetups found.</p>; // Handle the case when meetups is an empty array
  }

  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} id={meetup.id} />
      ))}
    </ul>
  );
};

export default MeetupList;
