import React from 'react';
import videos from '../videos.json';
import { Player } from './StudyComponents/Player/Player';
import { VideoList } from './StudyComponents/VideoList/VideoList';
////////////////////// Imports LESSON 1/////////////////////
import { Modal } from './StudyComponents/Modal/Modal';
import { Clock } from './StudyComponents/Clock/Clock';
import { Tabs } from './StudyComponents/Tabs/Tabs';
import { IconBtn } from './StudyComponents/IconBtn/IconBtn';
////////////////////////////////////////////////////////////

export class AppStudy extends React.Component {
  ////////////////////////// Lesson 1 ///////////////////
  state = {
    todos: [],
    filter: '',
    showModal: false,
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  ///////////////////////////////////////////////////////

  render() {
    const { showModal } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Selected video: {this.state.selectedVideo}</h1>
          <VideoList videos={videos} onSelect={this.selectVideo} />
          <Player url={this.state.selectedVideo} />
        </div>
        {/* //////////////////////// Components LESSON 1///////////////////////////////// */}
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        <IconBtn onClick={this.toggleModal}>Open Modal</IconBtn>

        <Tabs />
        {!showModal && <Clock />}
        {showModal && (
          <Modal handleCloseModal={this.toggleModal}>
            <h1>Glory to Ukraine!!! This is content of Modal how children</h1>
            <p>
              asdefhaskndv.,zxmnvb;SUEG fh'osakjdfLSKNVC/LX
              ZNCVoSDHF'apwsighfpsskdFHN sldvkhNZD;LKJFH
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
