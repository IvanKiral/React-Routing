import React from "react";
import { FormattedMessage } from "react-intl";

export const NotFound: React.FC = () => {
    return (
        <p>
          <FormattedMessage id={'not_found'} />
        </p>
    )
}
