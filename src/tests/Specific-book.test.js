import { render, screen, fireEvent } from "@testing-library/react";
import SpecificBook from "../components/Specific-book";
import { Context } from "../context";

describe("testing Specific-book component", () => {
  const context = {
    userName: "Oleg",
    setUserName: () => {},
    books: [
      {
        author: "David Flanagan",
        description:
          "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js.",
        id: 1,
        image:
          "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_the_definitive_guide.jpg",
        price: 10.99,
        shortDescription:
          "JavaScript is the programming language of the web and is used by more software developers today than any other programming language.",
        title: "JavaScript: The Definitive Guide, 7th Edition",
      },
    ],
    setBooks: () => {},
    idBook: 1,
    booksChoosen: [
      {
        id: "1",
        number: "1",
      },
    ],
    setBooksChoosen: () => {},
  };
  test("increase input value by 1 ", () => {
    render(
      <Context.Provider value={context}>
        <SpecificBook />
      </Context.Provider>
    );

    const qtyInput = screen.getByTestId("books-qty");
    const totalPrice = screen.getByTestId("total-price");
    expect(qtyInput.value).toBe("0");
    fireEvent.change(qtyInput, { target: { value: "1" } });
    expect(qtyInput.value).toBe("1");
    expect(totalPrice.innerHTML).toBe("10.99");
  });

  test("decrease input value by 1 ", () => {
    render(
      <Context.Provider value={context}>
        <SpecificBook />
      </Context.Provider>
    );

    const qtyInput = screen.getByTestId("books-qty");
    const totalPrice = screen.getByTestId("total-price");
    expect(qtyInput.value).toBe("0");
    fireEvent.change(qtyInput, { target: { value: "1" } });
    expect(qtyInput.value).toBe("1");
    fireEvent.change(qtyInput, { target: { value: "0" } });
    expect(qtyInput.value).toBe("0");
    expect(totalPrice.innerHTML).toBe("0.00");
  });
});
