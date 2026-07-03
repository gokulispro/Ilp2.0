/*==================================================
            CURONEX RESOURCE REGISTRATION
==================================================*/

"use strict";

/*==================================================
            DOM ELEMENTS
==================================================*/

const resourceForm = document.getElementById("resourceForm");

const resourceName = document.getElementById("resourceName");
const category = document.getElementById("category");
const quantity = document.getElementById("quantity");
const unit = document.getElementById("unit");
const hospital = document.getElementById("hospital");
const supplier = document.getElementById("supplier");
const batchNumber = document.getElementById("batchNumber");
const resourceType = document.getElementById("resourceType");
const manufactureDate = document.getElementById("manufactureDate");
const expiryDate = document.getElementById("expiryDate");
const description = document.getElementById("description");

/*==================================================
            ERROR LABELS
==================================================*/

const resourceNameError = document.getElementById("resourceNameError");
const categoryError = document.getElementById("categoryError");
const quantityError = document.getElementById("quantityError");
const unitError = document.getElementById("unitError");
const hospitalError = document.getElementById("hospitalError");
const supplierError = document.getElementById("supplierError");
const batchNumberError = document.getElementById("batchNumberError");
const resourceTypeError = document.getElementById("resourceTypeError");
const manufactureDateError = document.getElementById("manufactureDateError");
const expiryDateError = document.getElementById("expiryDateError");
const descriptionError = document.getElementById("descriptionError");

/*==================================================
            LOCAL STORAGE KEY
==================================================*/

const STORAGE_KEY = "resources";

/*==================================================
            LOAD RESOURCES
==================================================*/

let resources =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

/*==================================================
            SHOW ERROR
==================================================*/

function showError(inputField, errorField, message)
{
    inputField.classList.add("input-error");
    errorField.textContent = message;
}

/*==================================================
            CLEAR ERROR
==================================================*/

function clearError(inputField, errorField)
{
    inputField.classList.remove("input-error");
    errorField.textContent = "";
}

/*==================================================
            CLEAR ALL ERRORS
==================================================*/

function clearAllErrors()
{
    clearError(resourceName, resourceNameError);
    clearError(category, categoryError);
    clearError(quantity, quantityError);
    clearError(unit, unitError);
    clearError(hospital, hospitalError);
    clearError(supplier, supplierError);
    clearError(batchNumber, batchNumberError);
    clearError(resourceType, resourceTypeError);
    clearError(manufactureDate, manufactureDateError);
    clearError(expiryDate, expiryDateError);
    clearError(description, descriptionError);
}

/*==================================================
            GENERATE RESOURCE ID
==================================================*/

function generateResourceId()
{
    if(resources.length === 0)
    {
        return "RES001";
    }

    const lastId =
        resources[resources.length - 1].id;

    const number =
        parseInt(lastId.replace("RES", ""));

    return "RES" +
        String(number + 1).padStart(3, "0");
}

/*==================================================
            GENERATE STATUS
==================================================*/

function generateStatus(stock)
{
    if(stock <= 0)
    {
        return "Out of Stock";
    }

    if(stock <= 20)
    {
        return "Low Stock";
    }

    return "Available";
}

/*==================================================
            SAVE TO LOCAL STORAGE
==================================================*/

function saveResources()
{
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(resources)
    );
}

/*==================================================
            VALIDATE RESOURCE NAME
==================================================*/

function validateResourceName()
{
    const value = resourceName.value.trim();

    const namePattern = /^[A-Za-z0-9\s()-]+$/;

    if(value === "")
    {
        showError(
            resourceName,
            resourceNameError,
            "Resource name is required."
        );

        return false;
    }

    if(value.length < 3)
    {
        showError(
            resourceName,
            resourceNameError,
            "Minimum 3 characters required."
        );

        return false;
    }

    if(!namePattern.test(value))
    {
        showError(
            resourceName,
            resourceNameError,
            "Invalid resource name."
        );

        return false;
    }

    clearError(resourceName, resourceNameError);

    return true;
}

/*==================================================
            VALIDATE CATEGORY
==================================================*/

function validateCategory()
{
    if(category.value === "")
    {
        showError(
            category,
            categoryError,
            "Please select a category."
        );

        return false;
    }

    clearError(category, categoryError);

    return true;
}

/*==================================================
            VALIDATE QUANTITY
==================================================*/

function validateQuantity()
{
    const qty = Number(quantity.value);

    if(quantity.value === "")
    {
        showError(
            quantity,
            quantityError,
            "Quantity is required."
        );

        return false;
    }

    if(!Number.isInteger(qty))
    {
        showError(
            quantity,
            quantityError,
            "Quantity must be a whole number."
        );

        return false;
    }

    if(qty <= 0)
    {
        showError(
            quantity,
            quantityError,
            "Quantity must be greater than zero."
        );

        return false;
    }

    clearError(quantity, quantityError);

    return true;
}

/*==================================================
            VALIDATE UNIT
==================================================*/

function validateUnit()
{
    if(unit.value === "")
    {
        showError(
            unit,
            unitError,
            "Please select a unit."
        );

        return false;
    }

    clearError(unit, unitError);

    return true;
}

/*==================================================
            VALIDATE HOSPITAL
==================================================*/

function validateHospital()
{
    const value = hospital.value.trim();

    if(value === "")
    {
        showError(
            hospital,
            hospitalError,
            "Hospital / Camp is required."
        );

        return false;
    }

    clearError(hospital, hospitalError);

    return true;
}

/*==================================================
            VALIDATE SUPPLIER
==================================================*/

function validateSupplier()
{
    const value = supplier.value.trim();

    if(value === "")
    {
        showError(
            supplier,
            supplierError,
            "Supplier name is required."
        );

        return false;
    }

    clearError(supplier, supplierError);

    return true;
}

/*==================================================
            VALIDATE BATCH NUMBER
==================================================*/

function validateBatchNumber()
{
    const value = batchNumber.value.trim();

    if(value === "")
    {
        showError(
            batchNumber,
            batchNumberError,
            "Batch number is required."
        );

        return false;
    }

    const duplicate = resources.find(resource =>

        resource.batchNumber.toLowerCase() ===
        value.toLowerCase()

        &&

        resource.hospital.toLowerCase() ===
        hospital.value.trim().toLowerCase()

    );

    if(duplicate)
    {
        showError(
            batchNumber,
            batchNumberError,
            "Batch number already exists for this hospital."
        );

        return false;
    }

    clearError(batchNumber, batchNumberError);

    return true;
}

/*==================================================
            VALIDATE RESOURCE TYPE
==================================================*/

function validateResourceType()
{
    if(resourceType.value === "")
    {
        showError(
            resourceType,
            resourceTypeError,
            "Select a resource type."
        );

        return false;
    }

    clearError(
        resourceType,
        resourceTypeError
    );

    return true;
}

/*==================================================
            VALIDATE MANUFACTURE DATE
==================================================*/

function validateManufactureDate()
{
    if(manufactureDate.value === "")
    {
        showError(
            manufactureDate,
            manufactureDateError,
            "Manufacture date is required."
        );

        return false;
    }

    const today = new Date();

    const mfg = new Date(manufactureDate.value);

    if(mfg > today)
    {
        showError(
            manufactureDate,
            manufactureDateError,
            "Manufacture date cannot be in the future."
        );

        return false;
    }

    clearError(
        manufactureDate,
        manufactureDateError
    );

    return true;
}

/*==================================================
            VALIDATE EXPIRY DATE
==================================================*/

function validateExpiryDate()
{
    if(expiryDate.value === "")
    {
        showError(
            expiryDate,
            expiryDateError,
            "Expiry date is required."
        );

        return false;
    }

    const mfg = new Date(manufactureDate.value);

    const exp = new Date(expiryDate.value);

    if(exp <= mfg)
    {
        showError(
            expiryDate,
            expiryDateError,
            "Expiry date must be after manufacture date."
        );

        return false;
    }

    clearError(
        expiryDate,
        expiryDateError
    );

    return true;
}

/*==================================================
            VALIDATE DESCRIPTION
==================================================*/

function validateDescription()
{
    if(description.value.length > 500)
    {
        showError(
            description,
            descriptionError,
            "Maximum 500 characters allowed."
        );

        return false;
    }

    clearError(
        description,
        descriptionError
    );

    return true;
}

/*==================================================
            CREATE RESOURCE OBJECT
==================================================*/

function createResourceObject()
{
    return {

        id: generateResourceId(),

        resourceName: resourceName.value.trim(),

        category: category.value,

        quantity: Number(quantity.value),

        unit: unit.value,

        hospital: hospital.value.trim(),

        supplier: supplier.value.trim(),

        batchNumber: batchNumber.value.trim(),

        resourceType: resourceType.value,

        manufactureDate: manufactureDate.value,

        expiryDate: expiryDate.value,

        description: description.value.trim(),

        status: generateStatus(
            Number(quantity.value)
        ),

        createdAt: new Date().toISOString()

    };
}

/*==================================================
            SAVE RESOURCE
==================================================*/

function saveResource()
{
    const newResource = createResourceObject();

    resources.push(newResource);

    saveResources();
}

/*==================================================
            RESET FORM
==================================================*/

function resetRegistrationForm()
{
    resourceForm.reset();

    clearAllErrors();
}

/*==================================================
            SUCCESS MESSAGE
==================================================*/

function showSuccessMessage()
{
    alert(
        "Resource registered successfully!"
    );
}

/*==================================================
            VALIDATE COMPLETE FORM
==================================================*/

function validateForm()
{
    const validResourceName =
        validateResourceName();

    const validCategory =
        validateCategory();

    const validQuantity =
        validateQuantity();

    const validUnit =
        validateUnit();

    const validHospital =
        validateHospital();

    const validSupplier =
        validateSupplier();

    const validBatch =
        validateBatchNumber();

    const validType =
        validateResourceType();

    const validManufacture =
        validateManufactureDate();

    const validExpiry =
        validateExpiryDate();

    const validDescription =
        validateDescription();

    return (

        validResourceName &&

        validCategory &&

        validQuantity &&

        validUnit &&

        validHospital &&

        validSupplier &&

        validBatch &&

        validType &&

        validManufacture &&

        validExpiry &&

        validDescription

    );
}

/*==================================================
            FORM SUBMIT
==================================================*/

resourceForm.addEventListener("submit", function(event)
{
    event.preventDefault();

    clearAllErrors();

    if(!validateForm())
    {
        return;
    }

    saveResource();

    showSuccessMessage();

    resetRegistrationForm();
});

/*==================================================
            REAL TIME VALIDATION
==================================================*/

resourceName.addEventListener("input", validateResourceName);

category.addEventListener("change", validateCategory);

quantity.addEventListener("input", validateQuantity);

unit.addEventListener("change", validateUnit);

hospital.addEventListener("input", validateHospital);

supplier.addEventListener("input", validateSupplier);

batchNumber.addEventListener("input", validateBatchNumber);

resourceType.addEventListener("change", validateResourceType);

manufactureDate.addEventListener("change", function ()
{
    validateManufactureDate();

    if(expiryDate.value !== "")
    {
        validateExpiryDate();
    }
});

expiryDate.addEventListener("change", validateExpiryDate);

description.addEventListener("input", validateDescription);

/*==================================================
            RESET BUTTON
==================================================*/

resourceForm.addEventListener("reset", function ()
{
    setTimeout(function ()
    {
        clearAllErrors();
    }, 0);
});

/*==================================================
            PAGE INITIALIZATION
==================================================*/

document.addEventListener("DOMContentLoaded", function ()
{
    resources =
        JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || [];

    clearAllErrors();

    console.log(
        "Curonex Resource Registration Initialized"
    );

    console.log(
        "Resources Loaded:",
        resources.length
    );
});

/*==================================================
            SORT RESOURCES
==================================================*/

function sortResources()
{
    resources.sort(function(a, b)
    {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    saveResources();
}

/*==================================================
            CHECK DUPLICATE RESOURCE
==================================================*/

function resourceExists(resource)
{
    return resources.some(function(item)
    {
        return (

            item.resourceName.toLowerCase() ===
            resource.resourceName.toLowerCase()

            &&

            item.hospital.toLowerCase() ===
            resource.hospital.toLowerCase()

            &&

            item.batchNumber.toLowerCase() ===
            resource.batchNumber.toLowerCase()

        );
    });
}

/*==================================================
            REGISTER RESOURCE
==================================================*/

function registerResource()
{
    const resource = createResourceObject();

    if(resourceExists(resource))
    {
        showError(
            batchNumber,
            batchNumberError,
            "This resource already exists for the selected hospital."
        );

        return;
    }

    resources.push(resource);

    sortResources();

    showSuccessMessage();

    resetRegistrationForm();

    console.log("Resource Registered");

    console.table(resources);
}

/*==================================================
            UPDATE STORAGE
==================================================*/

window.addEventListener("beforeunload", function()
{
    saveResources();
});

/*==================================================
            KEYBOARD SHORTCUT
==================================================*/

document.addEventListener("keydown", function(event)
{
    if(event.ctrlKey && event.key === "Enter")
    {
        event.preventDefault();

        resourceForm.requestSubmit();
    }
});

/*==================================================
            AUTO TRIM INPUTS
==================================================*/

[
    resourceName,
    hospital,
    supplier,
    batchNumber,
    description
].forEach(function(field)
{
    field.addEventListener("blur", function()
    {
        field.value = field.value.trim();
    });
});

/*==================================================
            CHARACTER COUNTER
==================================================*/

description.addEventListener("input", function()
{
    if(description.value.length > 500)
    {
        description.value =
            description.value.substring(0,500);
    }
});

/*==================================================
            FINAL INITIALIZATION
==================================================*/

(function initialize()
{
    resources =
        JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || [];

    clearAllErrors();

    console.log(
        "=================================="
    );

    console.log(
        " Curonex Inventory Initialized "
    );

    console.log(
        " Resources Loaded :",
        resources.length
    );

    console.log(
        "=================================="
    );

})();



