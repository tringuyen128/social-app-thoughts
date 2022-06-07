import React from 'react'
//import useQuery hook from Aollo Client to make request to server
// make it avaialbe to use ApolloProvider
import { useQuery } from '@apollo/client'
//import hook to render
import { QUERY_THOUGHTS } from '../utils/queries'
import ThoughtList from '../components/ThoughtList'

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS)
  // if data exists, store it in the thoughts constant we just created
  const thoughts = data?.thoughts || []
  console.log(thoughts)

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Created Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Home
