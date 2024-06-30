export default async function Profile({ profile }) {
    if (profile) {
        return <img src={profile} className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'></img>
    } else {
        return <span className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 text-5xl'>?</span>
    }
}