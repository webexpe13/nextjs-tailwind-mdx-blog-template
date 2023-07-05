type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="md:w-10 md:h-10 w-8 h-8 rounded-full md:mr-4 mr-2" alt={name} />
      <div className="md:text-lg text-md font-bold">{name}</div>
    </div>
  )
}

export default Avatar
