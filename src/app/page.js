import LikeButton from "./likebutton";
import RegistrationForm from "./registrationform";


export default function Home() {
  return (
    <main>
      <h1>Student Registration Portal</h1>

      <p>
        Register students using Next.js Server Actions.
      </p>

      <RegistrationForm/>
      
      <LikeButton/>
    </main>
  );
}