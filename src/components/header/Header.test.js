import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header component", () => {
  test("renders navigation links correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const servicesLink = screen.getByText("Services");
    const educationLink = screen.getByText("Education");
    const contactsLink = screen.getByText("Contacts");

    expect(servicesLink.tagName).toBe("A");
    expect(servicesLink.getAttribute("href")).toBe("/");

    expect(educationLink.tagName).toBe("A");
    expect(educationLink.getAttribute("href")).toBe("/education");

    expect(contactsLink.tagName).toBe("A");
    expect(contactsLink.getAttribute("href")).toBe("/contacts");
  });
});
