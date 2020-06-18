import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ModalCSS from './modal.css'
import AddUser from './add_user_container';
import EditUser from './edit_user_container';
// import ManageContacts from '../../components/modal/manage_contacts'
import CreateContactContainer from './create_contact_container'
// import BulkUploadContacts from '../../components/modal/bulk_upload_contacts'
import ManageContactTypesContainer from './manage_contact_types_container';
import BulkUploadContainer from './bulk_upload_container';
import DeleteUser from './delete_user_container'

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'addUser':
      component = <AddUser closeModal={closeModal}/>
      break;
    case 'editUser':
      component = <EditUser closeModal={closeModal}/>
      break;
    case 'deleteUser':
      component = <DeleteUser closeModal={closeModal}/>
      break;
    // case 'manageContacts':
    //   component = <ManageContacts />;
    //   break;
    case 'createContact':
      component = <CreateContactContainer />;
      break;
    // case 'bulkUploadContacts':
    //   component = <bulkUploadContacts />;
    //   break;
    case 'manageTypes':
      component = <ManageContactTypesContainer />
      break;
    case 'bulkUpload':
      component = <BulkUploadContainer />
      break;
    default:
      return null;
  }
  
  return (
    <div className="modal-background" onMouseDown={closeModal}>
      <div className="modal-child" onMouseDown={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
