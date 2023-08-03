// our-domain.com/new-meetup

import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

function NewMeetupPage() {

  const router = useRouter();

  async function addMeetup(enteredMeetupData) {
    console.log(enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");

  }
return (
  <Fragment>
    <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Add your own meetups and create your own networking opportunities!"
        />
      </Head>
  <NewMeetupForm onAddMeetup={addMeetup} />
  </Fragment>
)
}

export default NewMeetupPage;