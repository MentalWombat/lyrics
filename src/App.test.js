import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';
import Result from './Result';

const nextTick = () => new Promise(r => process.nextTick(r));

let searchResult = {
  "result":{
    "artist":{
      "name":"Bring Me The Horizon"
    },
    "track":{
      "name":"Follow You",
      "text":"My head is haunting me\nand my heart feels like a ghost\nI need to feel something\n'cause I'm still so far from home\nCross your heart and hope to die\nPromise me you'll never leave my side\n\nShow me what I can't see\nWhen the spark in your eyes is gone\nyou've got me on my knees\nI'm your one-man cult\nCross my heart and hope to die\nPromise you I'll never leave your side\n\nCause I'm telling you you're all I need\nI promise you you're all I see\nCause I'm telling you you're all I need\nI'll never leave\n\nSo you can drag me through Hell\nIf it meant I could hold your hand\nI will follow you cause I'm under your spell\nAnd you can throw me to the flames\nI will follow you, I will follow you\n\nCome sink into me and let me breathe you in\nI'll be your gravity, you be my oxygen\nSo dig two graves cause when you die\nI swear I'll be leaving by your side\n\nSo you can drag me through Hell\nIf it meant I could hold your hand\nI will follow you cause I'm under you spell\nAnd you can throw me to the flames\nI will follow you\nSo you can drag me through Hell\nIf it meant I could hold your hand\nI will follow you cause I'm under your spell\nAnd you can throw me to the flames\nI will follow you, I will follow you\nI will follow you, I will follow you\n\nSo you can drag me through Hell\nIf it meant I could hold your hand\nI will follow you cause I'm under your spell\nAnd you can throw me to the flames\nI will follow you, I will follow you",
      "lang":{
        "code":"en",
        "name":"English"
      }
    },
    "copyright":{
      "notice":"Follow You lyrics are property and copyright of their owners. Commercial use is not allowed.",
      "artist":"Copyright Bring Me The Horizon",
      "text":"All lyrics provided for educational purposes and personal use only."
    },
    "probability":100,
    "similarity":1
  }
}

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has all initial content', () => {
  const { getByTestId } = render(<App/>);
  const navbar = getByTestId("navbar");
  const form = getByTestId("form");
  const container = getByTestId("container");
  const output = getByTestId("output");

  expect(navbar).toBeInTheDocument();
  expect(navbar).toContainElement(getByTestId("navbar-title"));
  expect(navbar).toContainElement(form);

  expect(form).toBeInTheDocument();
  expect(form).toContainElement(getByTestId("form-artist"));
  expect(form).toContainElement(getByTestId("form-track"));
  expect(form).toContainElement(getByTestId("submit"));

  expect(container).toBeInTheDocument();
  expect(container).toContainElement(output);
  expect(output).toBeEmpty();
});

// it('fetches data', async () => {
//   window.fetch = jest.fn(e => e.preventDefault());
//   window.fetch.mockReturnValueOnce(
//     Promise.resolve({
//       ok: true,
//       json: () => Promise.resolve(searchResult)
//     })
//   );
  
//   const { getByTestId } = render(<App/>);
//   const artist = getByTestId("form-artist");
//   const track = getByTestId("form-track");
//   const submit = getByTestId("submit");
//   const output = getByTestId("output");
  
//   fireEvent.change(artist, {target: {value: "Bring Me The Horizon"}});
//   fireEvent.change(track, {target: {value: "Follow You"}});
//   fireEvent.click(submit);
//   expect(output).toHaveTextContent("Loading...");

//   await nextTick();

//   expect(window.fetch).toBeCalledTimes(1);
//   expect(window.fetch).toBeCalledWith(
//     expect.stringContaining("Bring%20Me%20The%20Horizon/Follow%20You")
//   );

//   expect(output).not.toHaveTextContent("Loading...");
//   expect(output).not.toBeEmpty();
//   expect(output).toContainElement(getByTestId("output-title"));
//   expect(output).toContainElement(getByTestId("output-lyrics"));
//   // expect(getByTestId("output-title")).toHaveTextContent(`${searchResult.result.artist.name} — ${searchResult.result.track.name}`);
//   expect(getByTestId("output-lyrics")).toHaveTextContent(searchResult.result.track.text);

//   expect(artist).not.toHaveTextContent("Bring Me The Horizon");
//   expect(track).not.toHaveTextContent("Follow You");
// });

it('<Result>: initial', async () => {
  const { getByTestId } = render(<Result text={null} />);
  await waitForElement(() => expect(getByTestId("output-lyrics"))).toBeNull;
});

it('<Result>: loading', async () => {
  const { getByText } = render(<Result text="Loading..." />);
  await waitForElement(() => getByText(/Loading.../i));
});

it('<Result>: loaded', async () => {
  const { getByTestId } = render(<Result text={searchResult.result.track.text} />);
  await waitForElement(() => getByTestId("output-lyrics"))
  expect(getByTestId("output-lyrics")).toBeTruthy;
  expect(getByTestId("output-lyrics")).not.toHaveTextContent("Loading");
  expect(getByTestId("output-title")).toHaveTextContent("");
});
