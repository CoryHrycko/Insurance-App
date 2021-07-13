<?php

namespace App\Http\Controllers;

use App\Models\Quotation;
use App\Http\Controllers\Controller;
use App\Http\Requests\GetQuotationRequest;

class QuotationController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:api");
    }

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // if we wanted to create a dashboard these will come in handy
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(GetQuotationRequest $request)
    {
        $quotation = new Quotation($request->validated());
        $total = $quotation->getQuote();

        $quotation->user_id = $request->user()->id;
        $quotation->age = $request->validated()['age'];
        $quotation->currency_id = $request->validated()['currency_id'];
        $quotation->start_date  = $request->validated()['start_date'];
        $quotation->end_date = $request->validated()['end_date'];
        $quotation->total   = $total;

        $quotation->save();


        return response()->json([$quotation->toArray(), 'success' => true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // if we wanted to create a dashboard these will come in handy
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // if we wanted to create a dashboard these will come in handy
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(GetQuotationRequest $request, $id)
    {
        // if we wanted to create a dashboard these will come in handy
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // if we wanted to create a dashboard these will come in handy
    }
}
