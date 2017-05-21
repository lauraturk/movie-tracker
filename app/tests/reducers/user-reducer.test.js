import {user} from '../../reducers/user-reducer';


describe('user reducer tests', () => {


  it('should return an empty object', () => {

    expect(user(undefined, {})).toEqual({})
  })

  it('should sign in user', () => {

    const action = {
      type: 'SIGN_IN_USER',
      userId: 1
    }

    expect(user(undefined, action)).toHaveLength(1)
    expect(user([ action ], action)).toHaveLength(2)
  })
})
