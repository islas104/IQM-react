import Moodlet from './Moodlet';

const FSCMoodlets = () => {
  return (
    <div className="moodlet-container">
      <Moodlet label="FUELING" type="red" interactive={true} />
      <Moodlet label="SERVICING" type="yellow" interactive={true} />
      <Moodlet label="CLEANING" type="green" interactive={true} />
    </div>
  );
};

export default FSCMoodlets;
