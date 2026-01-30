function createDebugOutput(savedData, calcResult) {
  return {
    input_check: {
      height: savedData.height,
      weight: savedData.weight,
      distance: savedData.distance,
      time: savedData.time,
      fatigue: savedData.fatigue
    },
    segments_check: savedData.segments,
    calculation_result: calcResult
  };
}
