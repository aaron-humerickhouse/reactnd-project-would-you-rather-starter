import React from 'react';

class Page404Component extends React.Component {
  render() {
    const { location } = this.props
    return(
      <div>
        <h1>404</h1>
        {!!location.state.from &&
          <h2>
            No match found for
            <code>{location.state.from}</code>
          </h2>
        }
      </div>
    )
  }
}
export default Page404Component;
