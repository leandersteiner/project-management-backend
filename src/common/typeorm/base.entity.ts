import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @CreateDateColumn({
    type: 'timestamp',
    transformer: {
      from(value: string): Date {
        return new Date(value);
      },
      to(value: string): string {
        return value;
      }
    }
  })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;
}
