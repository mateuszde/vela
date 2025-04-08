import {
  StyledNavButton,
  PrimaryButton,
  SecondaryButton,
  SmallButton,
} from "./style";

const Button = ({ children, navigation, primary, secondary, small }) => {
  return (
    <>
      {navigation && (
        <StyledNavButton>
          <p>{children}</p>
        </StyledNavButton>
      )}

      {primary && (
        <PrimaryButton>
          <p>{children}</p>
        </PrimaryButton>
      )}

      {secondary && (
        <SecondaryButton>
          <p>{children}</p>
        </SecondaryButton>
      )}

      {small && (
        <SmallButton>
          <p>{children}</p>
        </SmallButton>
      )}
    </>
  );
};

export default Button;
