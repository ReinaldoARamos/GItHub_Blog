import { ComponentProps, ReactNode } from "react";
import { ExternaLinksContainer } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
type ExternaLinksProps = ComponentProps<typeof ExternaLinksContainer> & {
  text: string;
  icon?: ReactNode;
  variant?: "iconLeft";
};

export function ExternalLinks({ text, icon, ...rest }: ExternaLinksProps) {
  return (
    <ExternaLinksContainer {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
   
    </ExternaLinksContainer>
  );
}
;
