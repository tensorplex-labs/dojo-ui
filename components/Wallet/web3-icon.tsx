import jazzicon from 'jazzicon-ts';
import { useEffect, useRef } from 'react';
interface Props {
  address: string;
  size?: number;
}
const Web3Icon = ({ address, size }: Props) => {
  const avatarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!address || !avatarRef) return;
    const icon = jazzicon(size ?? 40, parseInt(address.slice(2, 10), 16));

    const myNode = avatarRef.current as HTMLElement;
    while (myNode?.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    myNode.appendChild(icon);
  }, [avatarRef, address, size]);
  return (
    <div className="flex items-center justify-center" ref={avatarRef}>
      {' '}
    </div>
  );
};

export default Web3Icon;
