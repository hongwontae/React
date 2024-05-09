import { StyledButton } from "./Button";

function Header() {
  return (
    <>
      <header className="text-center flex flex-col items-center">
        <h2 className="mt-5 mb-5 p-2 border">
          Hello Header! This is Anfiled/ Victory only one but WIN OURS
        </h2>
        <div>
          <p className="font-serif mb-14">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
            explicabo consectetur quasi odio, et blanditiis quia autem non
            fugiat dolorum molestias reprehenderit, quos veritatis maxime
            voluptate deserunt quaerat dignissimos excepturi! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vitae ipsum, mollitia omnis
            dolores sequi beatae incidunt quibusdam qui, est pariatur
            laudantium? Assumenda, voluptate repellendus? Sint cumque molestias
            ut! Fuga, pariatur! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reiciendis dolor, obcaecati sapiente quod ut sed
            maiores iste harum. Repudiandae repellat odio accusamus perspiciatis
            consequatur. Expedita asperiores veniam officiis sit blanditiis?
          </p>
        </div>
        <StyledButton>Button</StyledButton>
      </header>
    </>
  );
}

export default Header;
