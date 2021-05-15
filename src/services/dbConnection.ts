import { connect } from 'mongoose';

const createConnection = () => {
  return connect(
    `mongodb://localhost:27017/${process.env.DB_NAME}`,
    { useNewUrlParser: true },
  );
};

export default createConnection;
