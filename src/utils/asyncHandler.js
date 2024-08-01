const asyncHandler = (requestHandler) => {

    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }

}
export {asynchandler}

// 2nd approach

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
        
//     } catch (error) {
//         res.status(err.cde || 500).json({
//             success : false,
//             message: err.message
//         })
//     }
// }