import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'

const SignUpForm = () => {
  return (
    <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col max-w-md w-full justify-center items-center'>
            <LoginLink>Sign In</LoginLink>
            <RegisterLink>Sign Up</RegisterLink>
        </div>
    </div>
  )
}

export default SignUpForm;