import { IAgenda } from './interface/IAgenda'

abstract class Quadra {
  protected abstract reservar<T>(horaReserva: Date): IAgenda<T>;
}

export default Quadra;
