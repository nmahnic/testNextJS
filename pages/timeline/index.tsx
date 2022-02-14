import { NextPage } from "next"
import Link from "next/link"
import AppLayout from "../../components/AppLayout"

const Timeline: NextPage = () =>  {
  return (
    <AppLayout>
      <h1> This is the timeline </h1>
      <Link href="/">Go Home</Link>
    </AppLayout>
  )
}

export default Timeline