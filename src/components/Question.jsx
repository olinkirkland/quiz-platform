// import { useNavigate, useLocation, Outlet, NavLink } from "react-router-dom";

export default function Question({ question, chooseAnswer }) {
  if (!question) return <>No question!</>;
  return (
    <>
      <h3>{`Title: ${question.title}`}</h3>
      <pre>{JSON.stringify(question, null, 2)}</pre>
      {/* {question.answers.map((answer, index) => (
        <pre>{answer}</pre>
        // <Answer answer={answer} index={index} key={index} />
      ))} */}
    </>
  );
}
