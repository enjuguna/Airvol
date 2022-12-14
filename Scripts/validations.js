function hidesections() {
    document.getElementById("section1").style.display = "block";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";
    document.getElementById("section5").style.display = "none";
    document.getElementById("section6").style.display = "none";
    document.getElementById("section7").style.display = "none";
    document.getElementById("section8").style.display = "none";
    document.getElementById("section9").style.display = "none";
    document.getElementById("section10").style.display = "none";
    document.getElementById("section11").style.display = "none";
    document.getElementById("section12").style.display = "none";
  }
  
  let errorMessage = () => {
    window.alert("Make sure you have filled in all the fields.");
  };
  
  function change1() {
    owner = document.getElementById("projectOwner");
    client = document.getElementById("Client").value;
    projectName = document.getElementById("projectName").value;
    projectDate = document.getElementById("projectDate").value;
    projectAddresss = document.getElementById("address").value;
    projectStreet = document.getElementById("street").value;
    city = document.getElementById("city").value;
    country = document.getElementById("country").value;
  
    if (
      owner !== "" &&
      client !== "" &&
      projectName !== "" &&
      projectDate !== "" &&
      projectAddresss !== "" &&
      projectStreet !== "" &&
      city !== "" &&
      country !== ""
    ) {
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "block";
    } else {
      errorMessage();
    }
  }
  
  function revert1() {
    document.getElementById("section1").style.display = "block";
    document.getElementById("section2").style.display = "none";
  }
  
  function change2() {
    var val = document.getElementById("radiowarehouse");
    var val2 = document.getElementById("tempType");
    temperature = document.getElementById("temperature").value;
    n50 = document.getElementById("n50").value;
  
    if (
      val.elements["radioWarehouse"].value == "warehouse" ||
      val.elements["radioWarehouse"].value == "archive" ||
      val.elements["radioWarehouse"].value == "IT" ||
      val.elements["radioWarehouse"].value == "library"
    ) {
      if (val2.elements["options"].value == "freeze") {
        if (temperature !== "" && n50 !== "") {
          document.getElementById("section2").style.display = "none";
          document.getElementById("section3").style.display = "block";
        } else {
          errorMessage();
        }
      } else if (val2.elements["options"].value == "ambient") {
        if (n50 !== "" && temperature == "") {
          document.getElementById("section2").style.display = "none";
          document.getElementById("section3").style.display = "block";
        } else {
          errorMessage();
        }
      } else {
        errorMessage();
      }
    } else {
      errorMessage();
    }
  }
  
  function revert2() {
    document.getElementById("section2").style.display = "block";
    document.getElementById("section3").style.display = "none";
  }
  
  function change3() {
    length = document.getElementById("lengthRoom").value;
    width = document.getElementById("widthRoom").value;
    height = document.getElementById("heightRoom").value;
    let manualRoomVolume = document.getElementById("manualRoomVolume").value;
  
    if (length !== "" && width !== "") {
      document.getElementById("section4").style.display = "block";
      document.getElementById("section3").style.display = "none";
    } else {
      errorMessage();
    }
    if (manualRoomVolume == "" && height !== "") {
      document.getElementById("section4").style.display = "block";
      document.getElementById("section3").style.display = "none";
    } else if (manualRoomVolume !== "" && height == "") {
      document.getElementById("section4").style.display = "block";
      document.getElementById("section3").style.display = "none";
    } else {
      errorMessage();
    }
  
    volumeTotal();
  }
  
  function revert3() {
    document.getElementById("section4").style.display = "none";
    document.getElementById("section3").style.display = "block";
  }
  
  function change4() {
    height = document.getElementById("heightFloor").value;
    if (height !== "") {
      document.getElementById("section5").style.display = "block";
      document.getElementById("section4").style.display = "none";
    } else {
      errorMessage();
    }
    volumeTotal();
  }
  
  function revert4() {
    document.getElementById("section5").style.display = "none";
    document.getElementById("section4").style.display = "block";
  }
  
  function change5() {
    height = document.getElementById("heightCeiling").value;
  
    if (height !== "") {
      document.getElementById("section6").style.display = "block";
      document.getElementById("section5").style.display = "none";
    } else {
      errorMessage();
    }
    volumeTotal();
  }
  
  function revert5() {
    document.getElementById("section6").style.display = "none";
    document.getElementById("section5").style.display = "block";
  }
  
  function change6() {
    document.getElementById("section6").style.display = "none";
    document.getElementById("section7").style.display = "block";
  }
  
  function revert6() {
    document.getElementById("section6").style.display = "block";
    document.getElementById("section7").style.display = "none";
  }
  
  function change7() {
    val = document.getElementById("radioventilation");
    air = document.getElementById("volAir").value;
    val1 = document.getElementById("radiocirculation");
  
    if (val.elements["radioVentilation"].value == "no") {
      document.getElementById("section7").style.display = "none";
      document.getElementById("section8").style.display = "block";
    } else if (val.elements["radioVentilation"].value == "yes") {
      if (val1.elements["radioCirculation"].value == "air_circulation") {
        document.getElementById("section7").style.display = "none";
        document.getElementById("section8").style.display = "block";
      } else if (val1.elements["radioCirculation"].value == "fresh_air") {
        if (air !== "") {
          document.getElementById("section7").style.display = "none";
          document.getElementById("section8").style.display = "block";
        } else {
          errorMessage();
        }
      }
    }
  }
  
  function revert7() {
    document.getElementById("section7").style.display = "block";
    document.getElementById("section8").style.display = "none";
  }
  
  function change8() {
    val = document.getElementById("radiowalls");
    val1 = document.getElementById("insulationtype");
    val2 = document.getElementById("windload");
  
    if (
      val.elements["radioWalls"].value !== "" &&
      val1.elements["insulationType"].value !== "" &&
      val2.elements["windLoad"].value !== ""
    ) {
      document.getElementById("section9").style.display = "block";
      document.getElementById("section8").style.display = "none";
    } else if (val.elements["radioWalls"].value == "0") {
      if (val2.elements["windLoad"].value !== "") {
        document.getElementById("section9").style.display = "block";
        document.getElementById("section8").style.display = "none";
      }
    } else {
      errorMessage();
    }
  }
  
  function revert8() {
    document.getElementById("section9").style.display = "none";
    document.getElementById("section8").style.display = "block";
  }
  
  function change9() {
    var val = document.getElementById("radioopenings");
    openings = document.getElementById("wall-layers").value;
    manualVolume = document.getElementById("volumeSluice1").value;
    volumeFastDoor = document.getElementById("volumeDoorFast").value;
    volumeDoor = document.getElementById("volumeDoor").value;
  
    if (val.elements["radioOpenings"].value == "sluice") {
      if (manualVolume !== "" && openings !== "") {
        document.getElementById("section9").style.display = "none";
        document.getElementById("section10").style.display = "block";
      } else {
        errorMessage();
      }
    } else if (val.elements["radioOpenings"].value == "door") {
      if (volumeDoor !== "" && openings !== "") {
        document.getElementById("section9").style.display = "none";
        document.getElementById("section10").style.display = "block";
      } else {
        errorMessage();
      }
    } else if (val.elements["radioOpenings"].value == "doorFast") {
      if (volumeFastDoor !== "" && openings !== "") {
        document.getElementById("section9").style.display = "none";
        document.getElementById("section10").style.display = "block";
      } else {
        errorMessage();
      }
    } else {
      errorMessage();
    }
  }
  
  function revert9() {
    document.getElementById("section9").style.display = "block";
    document.getElementById("section10").style.display = "none";
  }
  
  function change10() {
    val = document.getElementById("radiowarehouse");
    length = document.getElementById("length-equipment").value;
    width = document.getElementById("width-equipment").value;
    height = document.getElementById("height-equipment").value;
    temp = document.getElementById("temp-equipment").value;
  
    let protectedMaterial = () => {
      if (
        val.elements["radioWarehouse"].value == "warehouse" ||
        val.elements["radioWarehouse"].value == "archive"
      ) {
        document.getElementById("section10").style.display = "none";
        document.getElementById("section11").style.display = "block";
      } else {
        document.getElementById("section10").style.display = "none";
        document.getElementById("section12").style.display = "block";
      }
    };
  
    if (length !== "" && width !== "" && height !== "" && temp !== "") {
      protectedMaterial();
    } else {
      errorMessage();
    }
  }
  
  function revert10() {
    document.getElementById("section10").style.display = "block";
    document.getElementById("section11").style.display = "none";
  }
  
  function change11() {
    var val = document.getElementById("radiostorage");
    oxyContent = document.getElementById("oxygenContent").value;
  
    if (val.elements["radioStorage"].value == "no") {
      if (oxyContent !== "") {
        document.getElementById("section11").style.display = "none";
        document.getElementById("section12").style.display = "block";
      } else {
        errorMessage();
      }
    } else if (val.elements["radioStorage"].value == "yes") {
      if (oxyContent !== "") {
        document.getElementById("section11").style.display = "none";
        document.getElementById("section12").style.display = "block";
      } else {
        errorMessage();
      }
    } else {
      errorMessage();
    }
  }
  
  function revert11() {
    document.getElementById("section11").style.display = "block";
    document.getElementById("section12").style.display = "none";
  }
  