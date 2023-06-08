import React from 'react';

// Alternative of shouldComponentUpdate export class Tabs extends React.PureComponent {//...}
export class Tabs extends React.PureComponent {
  state = {
    activeTabIdx: 0,
    items: [
      {
        label: 'Tab 1',
        content:
          'React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components.',
      },
      {
        label: 'Tab 2',
        content:
          'Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.',
      },
      {
        label: 'Tab 3',
        content:
          'React applications are built from isolated pieces of UI called components. A React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page. ',
      },
    ],
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeTabIdx !== this.state.activeTabIdx;
  // }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log('re-render');
    const { activeTabIdx, items } = this.state;

    const activeTab = this.state.items[activeTabIdx];

    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            width: '800px',
            color: '#010101',
          }}
        >
          {items.map((item, i) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(i)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '800px',
            color: '#010101',
          }}
        >
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
