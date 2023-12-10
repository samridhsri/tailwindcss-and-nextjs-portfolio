import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Us
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Part 1: I saw you in library.
            </h1>
            <p>
              Ek cute ladki dikhi mujhe, dost se poochha maine "woh kaun hai?". Bro gave me instagram ki ID.
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Part 2: Insta game strong
            </h1>
            <p>
              Story reply karke apni strong texting game dikha di maine. "Iss story par Taylor Swift ka Autumn gaana achha lagega".
              Did not expect but ispe reply mila mujhe. Continued conversation on instagram until I said Library mein Hi first time.
            </p>
            <br></br>
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Part 3: Library study sessions
            </h1>
            <p>
              Yeh toh best tha. Isme kya hi bolu. I academically rizzed you. Only Bad part would probably be Chilling point ke momos (jisme pyaaz hota hai).
              Isse achhe toh Delhi mein milte hai
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Part 4: Chai person or coffee person?
            </h1>
            <p>
              Pehli baar Chai Person se mila main aur teapost gaya. Wahan ki conversation toh kya hi batau
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Part 5: Nvm library is fun
            </h1>
            <p>
              Tea post par jo bhi ho mujhe library partner mil gaya tha. 5th semester mein iss Library partner ke bina 9.86 Gpa nahi aati (subtle flex lol)
              6th semester mein tum galat raaste chali gayi thi aur main toh galat raaste tha hi (GPA gir gayi meri)
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Part 6: aur bhyi kya chal raha hai?
            </h1>
            <p>
              Randomly Insta par wapas baatein start huyi, totally worth it. Yeh random conversation led me to one of my best semesters of college.
              My friends are your friends from now on. But I forgot mere dost bhi toh mere saath passout ho jaayenge.
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Part 7: Fun Dayouts, Stardom rolls, Let's go live ka Pasta
            </h1>
            <p>
              In short I went broke but totally worth it.
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Part 8: I'll see you soon pakka tera nahi pata
            </h1>
            <p>
              No description for this heading cause its pretty much self explanatory
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
