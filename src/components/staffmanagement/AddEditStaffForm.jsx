import { useState } from "react";
import FormField from "../dashboard/ui/FormField";
import PhotoUploadCard from "../dashboard/ui/PhotoUploadCard";

const AddEditStaffForm = ({ onSave, onCancel }) => {
  // Personal Information
  const [fullName, setFullName] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("Select gender");
  const [emergencyContact, setEmergencyContact] = useState("");

  // Job Information
  const [employeeId] = useState("Auto generated");
  const [roleDesignation, setRoleDesignation] = useState("");
  const [department, setDepartment] = useState("Select Department");
  const [salary, setSalary] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [employmentType, setEmploymentType] = useState("Full Time");
  const [assignedShift, setAssignedShift] = useState("Morning shift");
  const [status, setStatus] = useState("Active");

  const handleSave = () => {
    onSave?.({
      fullName,
      nicNumber,
      phoneNumber,
      emailAddress,
      address,
      dateOfBirth,
      gender,
      emergencyContact,
      roleDesignation,
      department,
      salary,
      joinDate,
      employmentType,
      assignedShift,
      status,
    });
  };

  return (
    <div>
      <PhotoUploadCard
        label="Upload Profile Photo"
        hint="JPG, PNG — Max 2MB"
      />

      {/* Personal Information */}
      <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5 mb-6">
        <h2 className="text-white text-base font-semibold">
          Personal Information
        </h2>
        <p className="text-gray-500 text-xs mb-5">Basic personal details</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <FormField
            label="Full Name"
            placeholder="e.g. Kasun Perera"
            value={fullName}
            onChange={setFullName}
          />
          <FormField
            label="NIC Number"
            placeholder="e.g. 009123456V"
            value={nicNumber}
            onChange={setNicNumber}
          />
          <FormField
            label="Phone Number"
            placeholder="+94 77 000 0000"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
          <FormField
            label="Email Address"
            placeholder="name@restro.lk"
            value={emailAddress}
            onChange={setEmailAddress}
          />
        </div>

        <div className="mb-5">
          <FormField
            label="Address"
            placeholder="Street address, city"
            value={address}
            onChange={setAddress}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <FormField
            label="Date Of Birth"
            type="date"
            value={dateOfBirth}
            onChange={setDateOfBirth}
          />
          <FormField
            label="Gender"
            as="select"
            options={["Select gender", "Male", "Female", "Other"]}
            value={gender}
            onChange={setGender}
          />
        </div>

        <FormField
          label="Emergency Contact"
          placeholder="Name- Phone Numbers"
          value={emergencyContact}
          onChange={setEmergencyContact}
        />
      </div>

      {/* Job Information */}
      <div className="bg-[#1C2A38] border border-slate-800 rounded-xl p-5">
        <h2 className="text-white text-base font-semibold">
          Job Information
        </h2>
        <p className="text-gray-500 text-xs mb-5">
          Role, department and contract details
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <FormField label="Employee ID" value={employeeId} disabled />
          <FormField
            label="Role/ Designation"
            placeholder="e.g. Head Waiter"
            value={roleDesignation}
            onChange={setRoleDesignation}
          />
        </div>

        <div className="mb-5">
          <FormField
            label="Department"
            as="select"
            options={[
              "Select Department",
              "Kitchen",
              "Service",
              "Cashier",
              "Management",
            ]}
            value={department}
            onChange={setDepartment}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <FormField
            label="Salary (LKR)"
            placeholder="e.g. 65000"
            value={salary}
            onChange={setSalary}
          />
          <FormField
            label="Join Date"
            type="date"
            value={joinDate}
            onChange={setJoinDate}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <FormField
            label="Employment Type"
            as="select"
            options={["Full Time", "Part Time", "Contract", "Internship"]}
            value={employmentType}
            onChange={setEmploymentType}
          />
          <FormField
            label="Assigned Shift"
            as="select"
            options={["Morning shift", "Evening shift", "Night shift"]}
            value={assignedShift}
            onChange={setAssignedShift}
          />
        </div>

        <div className="mb-6">
          <FormField
            label="Status"
            as="select"
            options={["Active", "On Leave", "Inactive"]}
            value={status}
            onChange={setStatus}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2.5 rounded-md bg-[#E67E22] text-white text-sm font-semibold hover:bg-orange-600 transition-colors duration-200"
          >
            Save Employee
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 rounded-md bg-slate-800 border border-slate-700 text-gray-200 text-sm font-semibold hover:border-orange-500 hover:text-orange-500 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditStaffForm;