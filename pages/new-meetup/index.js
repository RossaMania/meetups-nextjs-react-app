// our-domain.com/new-meetup

import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function NewMeetupPage() {

  function addMeetup(enteredMeetupData) {
    console.log(enteredMeetupData);

  }
return (
  <NewMeetupForm onAddMeetup={addMeetup} />
)
}

export default NewMeetupPage;