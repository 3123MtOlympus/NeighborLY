import { useQuery } from '@apollo/client';

import ToolList from '../components/ToolList';
import ToolForm from '../components/ToolForm';
import "../App.css" 
import { QUERY_TOOLS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TOOLS);
  const tools = data?.tools || [];

  return (
    <main className="imgBG">
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ToolForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ToolList
              tools={tools}
              title="Some Feed for Tool(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
