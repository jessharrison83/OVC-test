import React, { Component } from 'react';
import { render, cleanup } from 'react-testing-library';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import 'jest-dom/extend-expect';
import { Tbl } from '../styles';
import HeadingRows from '../components/Rows/HeadingRows';
import DataRows from '../components/Rows/DataRows';

const mockData = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618'
      }
    },
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  }
];

class TestTable extends Component {
  state = {
    headings: ['Name', 'Email', 'City', 'Company']
  };
  success() {
    this.props.dispatch({ type: 'SUCCESS' });
  }
  componentDidMount() {
    this.success();
  }
  render() {
    return (
      <Tbl>
        <tbody>
          <HeadingRows headings={this.state.headings} />
          <DataRows users={this.props.users} />
        </tbody>
      </Tbl>
    );
  }
}
const ConnectedTable = connect(state => ({ users: state.users }))(TestTable);

afterEach(cleanup);

function reducer(state = { users: [] }, action) {
  switch (action.type) {
    case 'SUCCESS':
      return {
        users: mockData
      };
    default:
      return state;
  }
}
function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

describe('the table component', () => {
  const tbl = renderWithRedux(<ConnectedTable />, {
    initialState: { users: mockData }
  });
  const headerTest = document.querySelector('.headingRows:first-child');
  const dataTest = document.querySelector('.dataRows:first-child');
  test('renders the appropriate headers', () => {
    expect(headerTest).toHaveTextContent('Name');
  });
  test('renders the data from the mock store', () => {
    expect(dataTest).toHaveTextContent('Leanne Graham');
  });
});
