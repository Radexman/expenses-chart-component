import PropTypes from 'prop-types';

const SingleBar = ({ stat, today }) => {
  const { dayName, day, amount, height } = stat;

  return (
    <div>
      <div
        className="chart-bar"
        style={{
          height: height,
          backgroundColor:
            today === day ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)',
        }}
        data-tip={`$${amount}`}
      ></div>
      <p className="text-primary text-center">{dayName}</p>
    </div>
  );
};

SingleBar.propTypes = {
  stat: PropTypes.shape({
    dayName: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  today: PropTypes.number.isRequired,
};

export default SingleBar;
