import './Introduction.scss';
const blockEl = 'introduction';
const Introduction = () => (
  <section className={blockEl}>
    <h2>Introduction</h2>
    <p>
      This website is intended to show a couple of charts with information
      related to immigrants arrested from the US in the last decade and also to
      show the daily vaccination progress in Mexico since December 2020.
    </p>
    <hr />
  </section>
);

export default Introduction;
