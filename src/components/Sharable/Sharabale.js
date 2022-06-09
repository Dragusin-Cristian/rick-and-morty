import { ErrorMessageParagraph } from './Sharable.styles';

export const ErrorMessage = (props) => {
  return (
    <ErrorMessageParagraph>
      (X_X) {<br />}{<br />} {props.errorMessage}
    </ErrorMessageParagraph>
  );
} 