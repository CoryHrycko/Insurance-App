<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Quotation class
 * @requires $data->age
 * @requires $data->currency_id
 * @requires $data->start_date
 * @requires $data->end_date
 */
class Quotation extends Model
{
    use HasFactory, Notifiable;

    private $data;


    const FIXED_RATE    = 3;

    const TIER_ONE      = 6;
    const TIER_TWO      = 7;
    const TIER_THREE    = 7;
    const TIER_FOUR     = 9;
    const TIER_FIVE     = 10;

    protected $fillable = [
        'age',
        'currency_id',
        'start_date',
        'end_date',
        'quote'
    ];


    public function __construct($data)
    {
        $this->data = collect($data);
    }

    public function Quotations()
    {
        return $this->belongsTo(User::class);
    }

    public function getQuote(): int
    {
        return $this->getAgeLoad();
    }
    
    // Util function

    public static function collectAges($data)
    {
        return collect(explode(',', $data))->sort()->values();
    }

    /**
     *  getAgeLoad
     *
     * (Fixed Rate * Age Load * Trip Length) + (repeat until done with ages list)
     * @return void
     */
    private function getAgeLoad(): int
    {
        return $this->formula(self::collectAges($this->data->get('age')))->sum();
    }

    private function decideLoad($age): float
    {
        if ($age <= 30) {
            return $this->percent(self::TIER_ONE);
        }

        if ($age <= 40) {
            return $this->percent(self::TIER_TWO);
        }

        if ($age <= 50) {
            return $this->percent(self::TIER_THREE);
        }

        if ($age <= 60) {
            return $this->percent(self::TIER_FOUR);
        }
        return $this->percent(self::TIER_FIVE);
    }

    private function tripLength($start_date, $end_date): int
    {
        $start  = new Carbon($start_date);
        $end    = new Carbon($end_date);
        return $end->diffInDays($start)+1;
    }

    private function percent($num): float
    {
        return $num/10;
    }

    private function formula($ages): Collection
    {
        return $ages->map(fn ($age) => self::FIXED_RATE * $this->decideLoad($age) * $this->tripLength($this->data->get('start_date'), $this->data->get('end_date')));
    }
}
