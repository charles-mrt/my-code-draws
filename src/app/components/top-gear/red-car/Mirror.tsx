interface MirrorProps {
  sidePosition: 'left' | 'right'
  degrePosition: 'left' | 'right'
  scaleX?: true
}

export const Mirror = ({ sidePosition, degrePosition, scaleX}: MirrorProps) => {

  const position = sidePosition === 'left' ? 'left-0' : 'right-0'
  const rotation = degrePosition === 'left' ? 'rotate-[4deg]' : 'rotate-[-4deg] '
  const transformX = scaleX === true ? 'transform scale-x-[-1]' : ''

  return (
    <div className={` w-[22px] h-[12px] p-[3px] rounded-sm rounded-tl-xl bg-red-500 ${position} ${rotation} ${transformX}`}>
      <div className="w-full h-full rounded-sm rounded-tl-xl bg-gradient-to-r from-gray-200 to-gray-500" />
    </div>
  )

}