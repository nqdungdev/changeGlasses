import React, { Component, Fragment } from "react";
import styles from "../css/changeGlasses.module.css";
import model from "../assets/img/model.jpg";
import v1 from "../assets/img/v1.png";
import v2 from "../assets/img/v2.png";
import v3 from "../assets/img/v3.png";
import v4 from "../assets/img/v4.png";
import v5 from "../assets/img/v5.png";
import v6 from "../assets/img/v6.png";
import v7 from "../assets/img/v7.png";
import v8 from "../assets/img/v8.png";
import v9 from "../assets/img/v9.png";

export default class ChangeGlasses extends Component {
  data = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: v1,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: v2,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: v3,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: v4,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: v5,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: v6,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: v7,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: v8,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: v9,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    prev: {},
    current: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: v1,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  selectGlasses = (item) => {
    item
      ? this.setState({ prev: this.state.current, current: item })
      : this.setState({ prev: this.state.current, current: {} });
  };
  render() {
    return (
      <Fragment>
        <header className={styles.glasses__header}>
          <h1>Try Glasses App Online</h1>
        </header>
        <section className={styles.glasses__content}>
          <div className={styles.glasses__container}>
            <div className={styles.glasses__model}>
              <div className={styles.glasses__model__item}>
                <img src={model} alt="model" />
                <div className={styles.glasses__info}>
                  <img src={this.state.prev.url} alt={this.state.prev.url} />
                  <div className={styles.glasses__info__content}>
                    <h1>{this.state.prev.name}</h1>
                    <span>${this.state.prev.price}</span>
                    <p>{this.state.prev.desc}</p>
                  </div>
                </div>
              </div>

              <div className={styles.glasses__model__item}>
                <img src={model} alt="model" />
                <div className={styles.glasses__info}>
                  <img
                    src={this.state.current.url}
                    alt={this.state.current.url}
                  />
                  <div className={styles.glasses__info__content}>
                    <h1>{this.state.current.name}</h1>
                    <span>${this.state.current.price}</span>
                    <p>{this.state.current.desc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.glasses__items}>
              {this.data.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={styles.glasses__item}
                    onClick={() => {
                      this.selectGlasses(item);
                    }}
                  >
                    <img src={item.url} alt={item.url} />;
                  </div>
                );
              })}

              <div
                className={styles.glasses__button}
                onClick={() => {
                  this.selectGlasses();
                }}
              >
                X
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
