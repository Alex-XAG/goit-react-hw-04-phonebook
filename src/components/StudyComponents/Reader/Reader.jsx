import React from 'react';
import { Controls } from './Conrols';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends React.Component {
  state = {
    publicationIndex: 0,
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ publicationIndex: Number(savedState) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.publicationIndex !== prevState.publicationIndex) {
      localStorage.setItem(LS_KEY, this.state.publicationIndex);
    }
  }

  changeIndex = value => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + value,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const { publications } = this.props;
    const currentPublication = publications[publicationIndex];
    return (
      <div>
        <Controls
          changeIndex={this.changeIndex}
          publicationIndex={publicationIndex}
          publications={publications}
        />

        <Progress
          publicationIndex={publicationIndex}
          publications={publications}
        />

        <Publication item={currentPublication} />
      </div>
    );
  }
}
