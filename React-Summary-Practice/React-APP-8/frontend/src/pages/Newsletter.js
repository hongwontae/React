import PageContent from "../components/PageContent";
import NewsletterSignup from "./NewsletterSignup";

function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');
  console.log(email)

  // send to backend newsletter server ...
  return { message: 'Signup successful!' };
}