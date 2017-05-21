import {user} from '../../reducers/user-reducer';


describe('user reducer tests', () => {


  it('should return an empty object', () => {

    expect(user(undefined, {})).toEqual({})
  })

  it('should sign in user', () => {

    const action = {
      type: 'SIGN_IN_USER',
      userId: {
        name: 'dude',
        id: 1,
        password: 'dude',
        email: 'dude'
      }
    }

    expect(user({}, action)).toHaveProperty('name', 'dude')
    expect(user({}, action)).toEqual(action.userId)
  })
})
