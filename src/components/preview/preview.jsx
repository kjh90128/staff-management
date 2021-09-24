import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({cards}) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Member Preview</h1>
    <ul className={styles.cards}>
    {
      Object.keys(cards).map(key=>(
        <Card card={cards[key]} key={key}/>
      ))
    }
    </ul>
  </section>
  );

export default Preview;