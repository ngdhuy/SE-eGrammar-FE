import Image from 'next/image'
import Container from './Container'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/home.jpg"
            alt="eGrammar"
            width={500}
            height={500}
          />
          <h1 className="text-6xl font-bold text-center mt-10">
            Welcome to eGrammar
          </h1>
          <p className="text-xl text-center mt-5">
            Please&nbsp;
            <Link href="/signin" className="
              text-blue-500
              hover:text-white
              hover:bg-blue-500
            ">
              Sign-in
            </Link> 
            &nbsp;or&nbsp; 
            <Link href="/signup" className="
              text-red-500
              hover:text-white
              hover:bg-red-500
            ">
              Sign-up
            </Link>
            &nbsp;to continue
          </p>
        </div>
      </main>
    </Container>
  )
}