import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://static.onecms.io/wp-content/uploads/sites/6/2016/07/slimer.jpg"
      title="A Meetup!"
      address="Some address."
      description="The meetup description."
    />
  );
}

export default MeetupDetails;
