<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Response;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserLoginRequest;

class UserController extends Controller
{

    protected $user;
    public function __construct()
    {
        $this->middleware("auth:api", ["except" => ["login","register"]]);
        $this->user = new User;
    }
    public function register(UserRequest $request)
    {

        $validated = collect($request->validated());

        $this->user->create([
            "name" => $validated->get('name'),
            "email" => $validated->get('email'),
            "password" => Hash::make($validated->get('password'))
        ]);

        return response()->json([
            'success' => true,
            'message' => "Registration Successful"], Response::HTTP_OK);
    }

    public function login(UserLoginRequest $request)
    {
        $validated = $request->validated();
        $user = User::where('email', $validated['email'])->first();
        if ($user) {
            if (!auth()->attempt($validated)) {
                $responseMessage = "Invalid username or password";
                return response()->json([
                    "success" => false,
                    "message" => $responseMessage,
                    "error" => $responseMessage
                ], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            $accessToken = auth()->user()->createToken('authToken')->accessToken;
            $responseMessage = "Login Successful";
            return $this->respondWithToken($accessToken, $responseMessage, auth()->user());
        } else {
            $responseMessage = "Sorry, this user does not exist";
            return response()->json([
                    "success" => false,
                    "message" => $responseMessage,
                    "error" => $responseMessage
                ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
    public function viewProfile()
    {
        $responseMessage = "user profile";
        $data = Auth::guard("api")->user();
        return response()->json([
            "success" => true,
            "message" => $responseMessage,
            "data" => $data
        ], Response::HTTP_OK);
    }
    public function logout()
    {
        $user = Auth::guard("api")->user()->token();
        $user->revoke();
        $responseMessage = "successfully logged out";
        return response()->json([
            'success' => true,
            'message' => $responseMessage
        ], Response::HTTP_OK);
    }
}
