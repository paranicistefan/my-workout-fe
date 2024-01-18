import * as styled from 'styled-components';

const PrimereactThemeResets = styled.createGlobalStyle`
  .connection-modal {
    .p-dialog-header {
      border-radius: 12px 12px 0 0;
    }
    .p-dialog-content {
      border-radius: 0 0 12px 12px;
    }
  }
  .table-config-modal {
    width: 407px;
    .p-dialog-content {
      border-radius: 12px 12px 0 0;
    }
    .p-dialog-footer {
      border-top: none;
      border-radius: 0 0 12px 12px;
    }
  }
  .p-dialog-content {
    overflow-y: hidden;
  }
`;
export default PrimereactThemeResets;
